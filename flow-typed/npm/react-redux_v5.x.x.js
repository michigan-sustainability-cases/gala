import type { Dispatch, Store } from "redux";

declare module "react-redux" {
  /*
    S = State
    A = Action
    OP = OwnProps
    SP = StateProps
    DP = DispatchProps
  */

  declare type MapStateToProps<S, OP: Object, SP: Object> = (
    state: S,
    ownProps: OP
  ) => ((state: S, ownProps: OP) => SP) | SP;

  declare type MapDispatchToProps<A, OP: Object, DP: Object> =
    | ((dispatch: Dispatch<A>, ownProps: OP) => DP)
    | DP;

  declare type MergeProps<SP, DP: Object, OP: Object, P: Object> = (
    stateProps: SP,
    dispatchProps: DP,
    ownProps: OP
  ) => P;

  declare type Context = { store: Store<*, *> };

  declare type ComponentWithDefaultProps<DP: {}, P: {}, CP: P> = Class<
    React$Component<CP>
  > & { defaultProps: DP };

  declare class ConnectedComponentWithDefaultProps<
    OP,
    DP,
    CP
  > extends React$Component<OP> {
    static defaultProps: DP, // <= workaround for https://github.com/facebook/flow/issues/4644
    static WrappedComponent: Class<React$Component<CP>>,
    getWrappedInstance(): React$Component<CP>,
    props: OP,
    state: void
  }

  declare class ConnectedComponent<OP, P> extends React$Component<OP> {
    static WrappedComponent: Class<React$Component<P>>,
    getWrappedInstance(): React$Component<P>,
    props: OP,
    state: void
  }

  declare type ConnectedComponentWithDefaultPropsClass<OP, DP, CP> = Class<
    ConnectedComponentWithDefaultProps<OP, DP, CP>
  >;

  declare type ConnectedComponentClass<OP, P> = Class<
    ConnectedComponent<OP, P>
  >;

  declare type Connector<OP, P> = (<DP: {}, CP: {}>(
    component: ComponentWithDefaultProps<DP, P, CP>
  ) => ConnectedComponentWithDefaultPropsClass<OP, DP, CP>) &
    ((component: React$ComponentType<P>) => ConnectedComponentClass<OP, P>);

  declare class Provider<S, A> extends React$Component<{
    store: Store<S, A>,
    children?: any
  }> {}

  declare function createProvider(
    storeKey?: string,
    subKey?: string
  ): Provider<*, *>;

  declare type ConnectOptions = {
    pure?: boolean,
    withRef?: boolean
  };

  declare type Null = null | void;

  declare function connect<A, OP>(
    ...rest: Array<void> // <= workaround for https://github.com/facebook/flow/issues/2360
  ): Connector<OP, { dispatch: Dispatch<A> } & OP>;

  declare function connect<A, OP>(
    mapStateToProps: Null,
    mapDispatchToProps: Null,
    mergeProps: Null,
    options: ConnectOptions
  ): Connector<OP, { dispatch: Dispatch<A> } & OP>;

  declare function connect<S, A, OP, SP>(
    mapStateToProps: MapStateToProps<S, OP, SP>,
    mapDispatchToProps: Null,
    mergeProps: Null,
    options?: ConnectOptions
  ): Connector<OP, SP & { dispatch: Dispatch<A> } & OP>;

  declare function connect<A, OP, DP>(
    mapStateToProps: Null,
    mapDispatchToProps: MapDispatchToProps<A, OP, DP>,
    mergeProps: Null,
    options?: ConnectOptions
  ): Connector<OP, DP & OP>;

  declare function connect<S, A, OP, SP, DP>(
    mapStateToProps: MapStateToProps<S, OP, SP>,
    mapDispatchToProps: MapDispatchToProps<A, OP, DP>,
    mergeProps: Null,
    options?: ConnectOptions
  ): Connector<OP, SP & DP & OP>;

  declare function connect<S, A, OP, SP, DP, P>(
    mapStateToProps: MapStateToProps<S, OP, SP>,
    mapDispatchToProps: Null,
    mergeProps: MergeProps<SP, DP, OP, P>,
    options?: ConnectOptions
  ): Connector<OP, P>;

  declare function connect<S, A, OP, SP, DP, P>(
    mapStateToProps: MapStateToProps<S, OP, SP>,
    mapDispatchToProps: MapDispatchToProps<A, OP, DP>,
    mergeProps: MergeProps<SP, DP, OP, P>,
    options?: ConnectOptions
  ): Connector<OP, P>;
}
