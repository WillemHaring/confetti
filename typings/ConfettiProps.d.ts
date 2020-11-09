/**
 * This file was generated from Confetti.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, ListValue, ListAttributeValue } from "mendix";

export type BootstrapStyleEnum = "default" | "inverse" | "primary" | "info" | "success" | "warning" | "danger";

export interface ConfettiContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    trigger?: DynamicValue<boolean>;
    triggerButton: boolean;
    TriggerButtonCaption: string;
    TriggerButtonDelay: number;
    TriggerButtonDelayMessage: string;
    bootstrapStyle: BootstrapStyleEnum;
    onClickEvent?: ActionValue;
    useRuntimeSettings: boolean;
    rt_settings?: ListValue;
    rt_angle?: ListAttributeValue<BigJs.Big>;
    rt_spread?: ListAttributeValue<BigJs.Big>;
    rt_StartVelocity?: ListAttributeValue<BigJs.Big>;
    rt_width?: ListAttributeValue<BigJs.Big>;
    rt_height?: ListAttributeValue<BigJs.Big>;
    rt_elementCount?: ListAttributeValue<BigJs.Big>;
    rt_dragFriction?: ListAttributeValue<BigJs.Big>;
    rt_stagger?: ListAttributeValue<BigJs.Big>;
    rt_duration?: ListAttributeValue<BigJs.Big>;
    rt_colors?: ListValue;
    rt_color?: ListAttributeValue<string>;
    dt_angle: number;
    dt_spread: number;
    dt_startVelocity: number;
    dt_width: number;
    dt_height: number;
    dt_elementCount: number;
    dt_dragFriction: BigJs.Big;
    dt_stagger: number;
    dt_duration: number;
    dt_colors: string;
}

export interface ConfettiPreviewProps {
    class: string;
    style: string;
    trigger: string;
    triggerButton: boolean;
    TriggerButtonCaption: string;
    TriggerButtonDelay: number | null;
    TriggerButtonDelayMessage: string;
    bootstrapStyle: BootstrapStyleEnum;
    onClickEvent: {} | null;
    useRuntimeSettings: boolean;
    rt_settings: {} | null;
    rt_angle: string;
    rt_spread: string;
    rt_StartVelocity: string;
    rt_width: string;
    rt_height: string;
    rt_elementCount: string;
    rt_dragFriction: string;
    rt_stagger: string;
    rt_duration: string;
    rt_colors: {} | null;
    rt_color: string;
    dt_angle: number | null;
    dt_spread: number | null;
    dt_startVelocity: number | null;
    dt_width: number | null;
    dt_height: number | null;
    dt_elementCount: number | null;
    dt_dragFriction: number | null;
    dt_stagger: number | null;
    dt_duration: number | null;
    dt_colors: string;
}
