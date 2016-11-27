declare module "react-native-easy-grid" {

    import {Component} from "react";
    import {ViewProperties} from "react-native";

    export interface RowProps extends ViewProperties {
        size?: number
    }

    export interface ColProps extends ViewProperties {
        size?: number
    }

    export class Grid extends Component<ViewProperties, any> {}
    export class Row extends Component<RowProps, any> {}
    export class Col extends Component<ColProps, any> {}
}
