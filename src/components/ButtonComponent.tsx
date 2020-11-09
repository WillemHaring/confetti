import { createElement, ReactElement, ReactNode } from "react";
import classNames from "classnames";

import "../ui/Button.css";

export type BootstrapStyleEnum = "default" | "inverse" | "primary" | "info" | "success" | "warning" | "danger";

export interface ButtonProps {
    children: ReactNode;
    className?: string;
    style?: object;
    label?: string;
    // value?: string;
    bootstrapStyle?: BootstrapStyleEnum;
    onClick?: () => void;
}

export const ButtonComponent = (props: ButtonProps): ReactElement => (
    <button
        className={classNames("widget--button btn", props.className, {
            [`btn-${props.bootstrapStyle}`]: !!props.bootstrapStyle
        })}
        onClick={props.onClick}
        style={props.style}
    >
        <span className="widget--button-text">{props.label}</span>
        {props.children}
    </button>
);
