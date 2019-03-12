declare module "react-native-easy-grid" {

    import {Component} from "react";
    import {GestureResponderEvent, ViewProperties} from "react-native";

    export interface RowProps extends ViewProperties {
        size?: number,
        onPress?: (event: GestureResponderEvent) => void
    }

    export interface ColProps extends ViewProperties {
        size?: number,
        onPress?: (event: GestureResponderEvent) => void
    }

    export class Grid extends Component<ViewProperties, any> {}
    export class Row extends Component<RowProps, any> {}
    export class Col extends Component<ColProps, any> {}
}
