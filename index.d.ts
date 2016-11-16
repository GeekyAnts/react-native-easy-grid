declare module "react-native-easy-grid" {

    import { Component } from "react";
    import {ViewProperties} from "react-native";

    export interface GridProps extends ViewProperties {}

    export interface RowProps extends ViewProperties {
        size?: number
    }

    export interface ColProps extends ViewProperties {
        size?: number
    }

    export class Grid extends Component<GridProps, any> {}
    export class Row extends Component<RowProps, any> {}
    export class Col extends Component<ColProps, any> {}
}
