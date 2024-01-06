declare module 'enter-view' {
    export interface EnterViewArgs {
        selector: NodeListOf<Element> | Element | string;
        enter?: (el: Element) => void;
        exit?: (el: Element) => void;
        progress?: (el: Element, progress: number) => void;
        offset?: number;
        once?: boolean;
    }

    const enterView: (args: EnterViewArgs) => void;
    export default enterView;
}