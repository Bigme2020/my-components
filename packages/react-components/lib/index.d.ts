import { FC, CSSProperties } from 'react';

declare type Placement = "left" | "right" | "top" | "bottom";
interface TooltipProp {
    title: string;
    children: any;
    placement?: Placement;
    style?: CSSProperties;
}
declare const Tooltip: FC<TooltipProp>;

declare const Silly: FC;

export { Silly, Tooltip };