declare module "react-native-easy-grid" {
    import {Component} from "react";
    import {View, ViewProperties} from "react-native";

    export interface RowProps extends ViewProperties {
        size?: number;
    }

    export interface ColProps extends ViewProperties {
        size?: number;
    }

    export class Grid extends Component<ViewProperties, any> {
        public _root: View | null;
    }
    export class Row extends Component<RowProps, any> {
        public _root: View | null;
    }
    export class Col extends Component<ColProps, any> {
        public _root: View | null;
    }
}
