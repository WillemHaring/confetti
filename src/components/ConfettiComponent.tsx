import { Component, ReactNode, createElement } from "react";
import Confetti, { ConfettiConfig } from "react-dom-confetti";

export interface ConfettiComponentProps {
    active?: boolean;
    config?: ConfettiConfig;
}

export class ConfettiComponent extends Component<ConfettiComponentProps> {
    render(): ReactNode {
        return <Confetti active={this.props.active!} config={this.props.config!} />;
    }
}
