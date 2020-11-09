import { Component, ReactNode, createElement } from "react";
import { ConfettiPreviewProps } from "../typings/ConfettiProps";
import { ConfettiState } from "./iConfettiState";

declare function require(name: string): string;

export class preview extends Component<ConfettiPreviewProps, ConfettiState> {
    render(): ReactNode {
        if (this.props.triggerButton) {
            const myclass = `btn-${this.props.bootstrapStyle} btn`;
            return <div className={myclass}>{this.props.TriggerButtonCaption}</div>;
        }
        return (
            <div>
                <img src="data:image/png;base64, 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" />
            </div>
        );
    }
}

export function getPreviewCss(): string {
    return require("./ui/Confetti.css");
}
