import { ValueStatus } from "mendix";
import { Component, createElement } from "react";
import { ConfettiConfig } from "react-dom-confetti";
import { ConfettiContainerProps } from "../typings/ConfettiProps";
import { ConfettiComponent } from "./components/ConfettiComponent";
import { ButtonComponent } from "./components/ButtonComponent";
import "./ui/Confetti.css";
import { ConfettiState } from "./iConfettiState";

/**
 * @class Confetti
 * @description this is a demonstration project to wrap a standard react component into Mendix, uses two Types,
 *              ConfettiContainerProps, generated from the confetti.xml file and ConfettiState, the stateobject
 * @extends Component, the react Component definition
 */
export default class Confetti extends Component<ConfettiContainerProps, ConfettiState> {
    /**
     * @class Confetti
     * @constructor class constructor, makes sure the state object is initialized
     * @param props Get the full parameter properties from the Mendix side
     */
    constructor(props: ConfettiContainerProps) {
        super(props);
        this.state = {
            // initialize the stateobject
            config: {},
            trigger: false,
            buttonCaption: props.TriggerButtonCaption
        };
    }

    /**
     *
     * @description Whenever someting changes on the Mendix side, this will be called before the render function,
     *              in our case, we only want this to run when the trigger is changing
     * @param _nextProps set by react, helpfull to compare to earlier setting
     */

    UNSAFE_componentWillReceiveProps(_nextProps: ConfettiContainerProps): boolean {
        if (this.props.trigger === undefined) {
            return false;
        }
        if (this.props.trigger!.status === ValueStatus.Loading) {
            // Is the trigger status available?
            return false;
        }
        if (this.props.trigger!.value === _nextProps.trigger!.value) {
            // has the trigger value changed?
            return false;
        }
        this.setState({
            config: this.getSettings(this.props), // get the settings
            trigger: true, // set the trigger for the confetti component
            buttonCaption: this.props.TriggerButtonCaption // set the button caption
        });
        return true;
    }

    /**
     * @description Called after the render function. We check if trigger is set, and will reset it after
     */
    componentDidUpdate(): void {
        if (this.state.trigger) {
            this.setState({ trigger: false });
        }
    }

    /** *
     * @method onClick
     * @description when a button is clicked, this is what is called first
     */
    private onClick = (): any => {
        this.setState({ buttonCaption: this.props.TriggerButtonDelayMessage }); // change the caption of the button to the delaymessage
        const timer = setTimeout(() => this.trigger(), this.props.TriggerButtonDelay); // start a timer, end when ready call trigger
        return () => clearTimeout(timer); // make sure the timer is cleaned up
    };

    /** *
     * @method trigger
     * @description When the timeout of the button has happened, trigger the confetti
     */
    private trigger = (): void => {
        this.setState({ config: this.getSettings(this.props), trigger: true }); // retrieve the configuration of this particular confetti and trigger it
        this.setState({ buttonCaption: this.props.TriggerButtonCaption }); // change the caption of the button to the normal caption
        if (this.props.onClickEvent === undefined) {
            return;
        } // is there an action we need to do in de Mendix world?
        if (this.props.onClickEvent.isExecuting) {
            return;
        } // is that action allready executing?
        this.props.onClickEvent.execute(); // then execute that action in Mendix
    };

    /** *
     * @method      render
     * @description standard render hook from React
     */
    render(): JSX.Element {
        if (this.props.triggerButton) {
            return this.buttonElement();
        }
        return this.confettiElement();
    }

    /**
     * @method buttonElement
     * @returns JSX.Element
     * @description helper to nicely return a button with an embedded confetti
     */
    private buttonElement(): JSX.Element {
        return (
            <ButtonComponent
                bootstrapStyle={this.props.bootstrapStyle}
                className={this.props.class}
                label={this.state.buttonCaption}
                onClick={this.onClick}
                style={this.props.style}
            >
                {this.confettiElement()}
            </ButtonComponent>
        );
    }

    /**
     * @method confettiElement
     * @returns JSX.Element
     * @description helpen to nicely return a confetti
     */
    private confettiElement(): JSX.Element {
        return <ConfettiComponent active={this.state.trigger} config={this.state.config} />;
    }

    /** *
     * @method getSettings
     * @description Gets the settings from the Mendix, either thru runtime or thru designtime settings
     * @returns     ConfettiConfig object for the confetti component
     */
    private getSettings(props: ConfettiContainerProps): ConfettiConfig {
        if (this.props.useRuntimeSettings) {
            return this.getRuntimeSetting(props);
        } // When using runtime settings for this component, get the runtime settings
        return this.getDesigntimeSettings(props); // otherwise get the designtime settings
    }

    /**
     * @method getDefaultSettings
     * @description fills a ConfettiConfig object with default values
     * @returns ConfettiConfig
     */
    private getDefaultSettings(): ConfettiConfig {
        const config: ConfettiConfig = {};
        config.angle = 45;
        config.startVelocity = 40;
        config.elementCount = 70;
        config.dragFriction = 0.12;
        config.duration = 3000;
        config.stagger = 3;
        config.height = "10px";
        config.width = "10px";
        config.colors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];
        return config;
    }

    /**
     * @method getRuntimeSetting
     * @description Gets the runtime values from the Mendix datasource
     * @param props ConfettiContainerProps
     * @returns ConfettiConfig
     */
    private getRuntimeSetting(props: ConfettiContainerProps): ConfettiConfig {
        if (props.rt_settings?.status === ValueStatus.Loading) {
            return {};
        }
        if (!props.rt_settings?.items) {
            return {};
        }
        if (props.rt_settings?.items.length === 0) {
            return {};
        }
        if (props.rt_colors?.status === ValueStatus.Loading) {
            return {};
        }

        const config: ConfettiConfig = this.getDefaultSettings();
        for (const i of props.rt_settings.items) {
            config.angle = Number(props.rt_angle!(i).value);
            config.startVelocity = Number(props.rt_StartVelocity!(i).value);
            config.elementCount = Number(props.rt_elementCount!(i).value);
            config.dragFriction = Number(props.rt_dragFriction!(i).value);
            config.duration = Number(props.rt_duration!(i).value);
            config.stagger = Number(props.rt_stagger!(i).value);
            config.height = `${props.rt_height!(i).value}px`;
            config.width = `${props.rt_width!(i).value}px`;
            break; // we are only interested in the first elemen in this list.
        }

        if (!props.rt_settings?.items || props.rt_settings?.items.length === 0) {
            return config;
        }
        let colorstring = "";
        for (const i of props.rt_colors!.items!) {
            if (colorstring.length > 0) {
                colorstring += ", ";
            }
            colorstring += props.rt_color!(i).displayValue;
        }
        config.colors = colorstring.replace(/\s/g, "").split(",");
        return config;
    }

    /**
     * @method getDesigntimeSettings
     * @description gets the settings from the designtime properties of the widget
     * @param props CongettiContainerProps
     * @returns ConfettiConfig
     */
    private getDesigntimeSettings(props: ConfettiContainerProps): ConfettiConfig {
        const config: ConfettiConfig = {};
        config.angle = props.dt_angle;
        config.startVelocity = props.dt_startVelocity;
        config.elementCount = props.dt_elementCount;
        config.dragFriction = Number(props.dt_dragFriction);
        config.duration = props.dt_duration;
        config.stagger = props.dt_stagger;
        config.height = `${props.dt_height}px`;
        config.width = `${props.dt_width}px`;
        config.colors = props.dt_colors.replace(/\s/g, "").split(",");
        return config;
    }
}
